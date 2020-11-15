
import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";

//===========================================================================
// Trigger: Destroy Last
//===========================================================================
const Trig_Destroy_Last_Conditions = (): boolean => {


	if ( ( ! ( udg_FC[ GetConvertedPlayerId( GetOwningPlayer( GetTriggerUnit() ) ) ] > 0 ) ) ) {

		return false;

	}


	if ( ( ! ( GetSpellAbilityId() === FourCC( "A000" ) ) ) ) {

		return false;

	}

	return true;

};


const Trig_Destroy_Last_Func001Func001Func003Func003C = (): boolean => {


	if ( ( ! ( IsUnitInGroup( udg_TempUnit, udg_CancelGroup ) === true ) ) ) {

		return false;

	}


	if ( ( ! ( GetUnitPointValue( udg_TempUnit ) > 0 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Destroy_Last_Func001Func001Func003C = (): boolean => {


	if ( ( ! ( IsUnitAliveBJ( udg_TempUnit ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Destroy_Last_Func001Func001C = (): boolean => {


	if ( ( ! ( udg_FC[ GetConvertedPlayerId( GetOwningPlayer( GetTriggerUnit() ) ) ] > 0 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Destroy_Last_Actions = (): void => {

	bj_forLoopAIndex = 1;
	bj_forLoopAIndexEnd = 1000;

	while ( true ) {

		if ( bj_forLoopAIndex > bj_forLoopAIndexEnd ) break;

		if ( ( Trig_Destroy_Last_Func001Func001C() ) ) {

			udg_TempUnit = LoadUnitHandleBJ( GetConvertedPlayerId( GetOwningPlayer( GetTriggerUnit() ) ), udg_FC[ GetConvertedPlayerId( GetOwningPlayer( GetTriggerUnit() ) ) ], udg_XHashtable );

			if ( ( Trig_Destroy_Last_Func001Func001Func003C() ) ) {


				if ( ( Trig_Destroy_Last_Func001Func001Func003Func003C() ) ) {

					udg_TempPoint2 = GetUnitLoc( GetTriggerUnit() );
					udg_TempPoint = OffsetLocation( udg_TempPoint2, - 30, 0 );
					CreateTextTagLocBJ( ( "|cffffcc00+" + I2S( GetUnitPointValue( udg_TempUnit ) ) ), udg_TempPoint, 0, 9.8, 100, 100, 100, 0 )
					SetTextTagPermanentBJ( GetLastCreatedTextTag(), false )
					SetTextTagFadepointBJ( GetLastCreatedTextTag(), 1.6 )
					SetTextTagVelocityBJ( GetLastCreatedTextTag(), 55, GetRandomDirectionDeg() )
					SetTextTagLifespanBJ( GetLastCreatedTextTag(), 3.1 )
					AdjustPlayerStateBJ( GetUnitPointValue( udg_TempUnit ), GetOwningPlayer( GetTriggerUnit() ), PLAYER_STATE_RESOURCE_GOLD )
					RemoveLocation( udg_TempPoint )
					RemoveLocation( udg_TempPoint2 )

				} else {

				null

				}

				RemoveUnit( udg_TempUnit )
				udg_FC[ GetConvertedPlayerId( GetOwningPlayer( GetTriggerUnit() ) ) ] = ( udg_FC[ GetConvertedPlayerId( GetOwningPlayer( GetTriggerUnit() ) ) ] - 1 );
				return;

			} else {

				udg_FC[ GetConvertedPlayerId( GetOwningPlayer( GetTriggerUnit() ) ) ] = ( udg_FC[ GetConvertedPlayerId( GetOwningPlayer( GetTriggerUnit() ) ) ] - 1 );

			}


		} else {

			return;

		}

		bj_forLoopAIndex = bj_forLoopAIndex + 1;

	}



};


//===========================================================================
const InitTrig_Destroy_Last = (): void => {

	gg_trg_Destroy_Last = CreateTrigger();
	TriggerRegisterAnyUnitEventBJ( gg_trg_Destroy_Last, EVENT_PLAYER_UNIT_SPELL_EFFECT )
	TriggerAddCondition( gg_trg_Destroy_Last, Condition( Trig_Destroy_Last_Conditions ) )
	TriggerAddAction( gg_trg_Destroy_Last, Trig_Destroy_Last_Actions )

};

addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Destroy_Last();

} );
