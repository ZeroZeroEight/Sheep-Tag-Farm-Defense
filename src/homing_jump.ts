
import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";

//===========================================================================
// Trigger: Homing Jump
//===========================================================================
const Trig_Homing_Jump_Func003Func001Func001Func003002003 = (): boolean => {

	return ( IsUnitType( GetFilterUnit(), UNIT_TYPE_ANCIENT ) === true );

};


const Trig_Homing_Jump_Func003Func001Func001Func004Func002002002 = (): boolean => {

	return ( IsUnitType( GetFilterUnit(), UNIT_TYPE_ANCIENT ) === true );

};


const Trig_Homing_Jump_Func003Func001Func001Func004Func003C = (): boolean => {


	if ( ( ! ( CountUnitsInGroup( udg_TempGroup2 ) > 0 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Homing_Jump_Func003Func001Func001Func004C = (): boolean => {


	if ( ( ! ( CountUnitsInGroup( udg_TempGroup2 ) > 0 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Homing_Jump_Func003Func001Func001C = (): boolean => {


	if ( ( ! ( GetUnitUserData( GetEnumUnit() ) >= 10 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Homing_Jump_Func003Func001C = (): boolean => {


	if ( ( ! ( GetOwningPlayer( GetEnumUnit() ) !== Player( PLAYER_NEUTRAL_AGGRESSIVE ) ) ) ) {

		return false;

	}

	return true;

};


const Trig_Homing_Jump_Func003A = (): void => {


	if ( ( Trig_Homing_Jump_Func003Func001C() ) ) {


		if ( ( Trig_Homing_Jump_Func003Func001Func001C() ) ) {

			udg_TempPoint2 = GetUnitLoc( GetEnumUnit() );
			udg_TempGroup2 = GetUnitsInRangeOfLocMatching( 1500, udg_TempPoint2, Condition( Trig_Homing_Jump_Func003Func001Func001Func003002003 ) );

			if ( ( Trig_Homing_Jump_Func003Func001Func001Func004C() ) ) {

				udg_RoundInfo[ 999 ] = 0;
				SetUnitPathing( GetEnumUnit(), false )
				SetUnitUserData( GetEnumUnit(), 0 )
				udg_HomingUnit = FirstOfGroup( udg_TempGroup2 );
				udg_TempPoint = GetUnitLoc( udg_HomingUnit );
				udg_HomingAngle = AngleBetweenPoints( udg_TempPoint2, udg_TempPoint );
				SetUnitFacingToFaceLocTimed( GetEnumUnit(), udg_TempPoint, 0 )
				SetUnitMoveSpeed( GetEnumUnit(), 1 )
				RemoveLocation( udg_TempPoint )
				UnitAddAbilityBJ( FourCC( "Amrf" ), GetEnumUnit() )
				UnitRemoveAbilityBJ( FourCC( "Amrf" ), GetEnumUnit() )
				CreateNUnitsAtLoc( 1, FourCC( "h00B" ), Player( 8 ), udg_TempPoint2, bj_UNIT_FACING )
				AddSpecialEffectTargetUnitBJ( "chest", GetLastCreatedUnit(), "Environment\\LargeBuildingFire\\LargeBuildingFire1.mdl" )
				udg_HomingEffect[ udg_RoundInfo[ 999 ] ] = GetLastCreatedEffectBJ();
				UnitApplyTimedLifeBJ( 5, FourCC( "BTLF" ), GetLastCreatedUnit() )
				SetUnitFlyHeightBJ( GetEnumUnit(), 150, 75 )
				EnableTrigger( gg_trg_Homing_Move )
				EnableTrigger( gg_trg_Homing_Effect )

			} else {

				DestroyGroup( udg_TempGroup2 )
				udg_TempGroup2 = GetUnitsInRectMatching( GetEntireMapRect(), Condition( Trig_Homing_Jump_Func003Func001Func001Func004Func002002002 ) );

				if ( ( Trig_Homing_Jump_Func003Func001Func001Func004Func003C() ) ) {

					udg_RoundInfo[ 999 ] = 0;
					SetUnitPathing( GetEnumUnit(), false )
					SetUnitUserData( GetEnumUnit(), 0 )
					udg_HomingUnit = FirstOfGroup( udg_TempGroup2 );
					udg_TempPoint = GetUnitLoc( udg_HomingUnit );
					udg_HomingAngle = AngleBetweenPoints( udg_TempPoint2, udg_TempPoint );
					SetUnitFacingToFaceLocTimed( GetEnumUnit(), udg_TempPoint, 0 )
					SetUnitMoveSpeed( GetEnumUnit(), 1 )
					RemoveLocation( udg_TempPoint )
					UnitAddAbilityBJ( FourCC( "Amrf" ), GetEnumUnit() )
					UnitRemoveAbilityBJ( FourCC( "Amrf" ), GetEnumUnit() )
					CreateNUnitsAtLoc( 1, FourCC( "h00B" ), Player( 8 ), udg_TempPoint2, bj_UNIT_FACING )
					AddSpecialEffectTargetUnitBJ( "chest", GetLastCreatedUnit(), "Environment\\LargeBuildingFire\\LargeBuildingFire1.mdl" )
					udg_HomingEffect[ udg_RoundInfo[ 999 ] ] = GetLastCreatedEffectBJ();
					UnitApplyTimedLifeBJ( 5, FourCC( "BTLF" ), GetLastCreatedUnit() )
					SetUnitFlyHeightBJ( GetEnumUnit(), 150, 75 )
					EnableTrigger( gg_trg_Homing_Move )
					EnableTrigger( gg_trg_Homing_Effect )

				} else {

				null

				}


			}

			DestroyGroup( udg_TempGroup2 )
			RemoveLocation( udg_TempPoint2 )

		} else {

		null

		}


	} else {

	null

	}


};


const Trig_Homing_Jump_Actions = (): void => {

	udg_TempGroup = GetUnitsOfTypeIdAll( FourCC( "E009" ) );
	ForGroupBJ( udg_TempGroup, Trig_Homing_Jump_Func003A )
	DestroyGroup( udg_TempGroup )

};


//===========================================================================
const InitTrig_Homing_Jump = (): void => {

	gg_trg_Homing_Jump = CreateTrigger();
	DisableTrigger( gg_trg_Homing_Jump )
	TriggerRegisterTimerEventPeriodic( gg_trg_Homing_Jump, 1 )
	TriggerAddAction( gg_trg_Homing_Jump, Trig_Homing_Jump_Actions )

};

addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Homing_Jump();

} );
