
import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";

//===========================================================================
// Trigger: Antirun
//===========================================================================
const Trig_Antirun_Func001Func002Func002Func001C = (): boolean => {


	if ( ( ! ( GetUnitUserData( GetEnumUnit() ) === 9 ) ) ) {

		return false;

	}


	if ( ( ! ( GetUnitTypeId( GetEnumUnit() ) === FourCC( "E009" ) ) ) ) {

		return false;

	}

	return true;

};


const Trig_Antirun_Func001Func002Func002Func003C = (): boolean => {


	if ( ( ! ( GetUnitUserData( GetEnumUnit() ) === 6 ) ) ) {

		return false;

	}


	if ( ( ! ( IsUnitType( GetEnumUnit(), UNIT_TYPE_SUMMONED ) === false ) ) ) {

		return false;

	}


	if ( ( ! ( IsUnitAliveBJ( GetEnumUnit() ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Antirun_Func001Func002Func002C = (): boolean => {


	if ( ( ! ( udg_RoundInfo[ 1 ] !== 10 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Antirun_Func001Func002A = (): void => {

	SetUnitUserData( GetEnumUnit(), ( GetUnitUserData( GetEnumUnit() ) + 1 ) )

	if ( ( Trig_Antirun_Func001Func002Func002C() ) ) {


		if ( ( Trig_Antirun_Func001Func002Func002Func003C() ) ) {

			UnitAddItemByIdSwapped( FourCC( "I01R" ), GetEnumUnit() )
			AddSpecialEffectTargetUnitBJ( "origin", GetEnumUnit(), "Abilities\\Spells\\Items\\AIlm\\AIlmTarget.mdl" )
			DestroyEffectBJ( GetLastCreatedEffectBJ() )

		} else {

		null

		}


	} else {


		if ( ( Trig_Antirun_Func001Func002Func002Func001C() ) ) {

			CreateTextTagUnitBJ( "TRIGSTR_400", GetEnumUnit(), 0, 9.8, 100, 100, 100, 0 )
			SetTextTagVelocityBJ( GetLastCreatedTextTag(), 64, 90 )
			SetTextTagPermanentBJ( GetLastCreatedTextTag(), false )
			SetTextTagLifespanBJ( GetLastCreatedTextTag(), 3.2 )
			SetTextTagFadepointBJ( GetLastCreatedTextTag(), 1.6 )

		} else {

		null

		}


	}


};


const Trig_Antirun_Actions = (): void => {

	bj_forLoopAIndex = 9;
	bj_forLoopAIndexEnd = 12;

	while ( true ) {

		if ( bj_forLoopAIndex > bj_forLoopAIndexEnd ) break;
		udg_TempGroup = GetUnitsOfPlayerAll( ConvertedPlayer( GetForLoopIndexA() ) );
		ForGroupBJ( udg_TempGroup, Trig_Antirun_Func001Func002A )
		DestroyGroup( udg_TempGroup )
		bj_forLoopAIndex = bj_forLoopAIndex + 1;

	}



};


//===========================================================================
const InitTrig_Antirun = (): void => {

	gg_trg_Antirun = CreateTrigger();
	TriggerRegisterTimerEventPeriodic( gg_trg_Antirun, 1 )
	TriggerAddAction( gg_trg_Antirun, Trig_Antirun_Actions )

};




addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Antirun();

} );
