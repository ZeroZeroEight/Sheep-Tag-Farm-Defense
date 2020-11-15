import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";

//===========================================================================
// Trigger: Drag
//===========================================================================
const Trig_Drag_Func001002003 = (): boolean => {

	return ( GetUnitTypeId( GetFilterUnit() ) !== FourCC( "h008" ) );

};


const Trig_Drag_Func002Func001Func002Func001C = (): boolean => {


	if ( ( ! ( udg_Targets[ udg_LoopIndex ] === 2 ) ) ) {

		return false;

	}


	if ( ( ! ( IsUnitEnemy( GetEnumUnit(), GetOwningPlayer( udg_DamageSource[ udg_LoopIndex ] ) ) === true ) ) ) {

		return false;

	}

	return true;

};


const Trig_Drag_Func002Func001Func002Func002C = (): boolean => {


	if ( ( ! ( udg_Targets[ udg_LoopIndex ] === 1 ) ) ) {

		return false;

	}


	if ( ( ! ( IsUnitEnemy( GetEnumUnit(), GetOwningPlayer( udg_DamageSource[ udg_LoopIndex ] ) ) === false ) ) ) {

		return false;

	}

	return true;

};


const Trig_Drag_Func002Func001Func002C = (): boolean => {


	if ( ( Trig_Drag_Func002Func001Func002Func001C() ) ) {

		return true;

	}


	if ( ( Trig_Drag_Func002Func001Func002Func002C() ) ) {

		return true;

	}


	if ( ( ( IsUnitDeadBJ( GetEnumUnit() ) === true ) ) ) {

		return true;

	}


	if ( ( ( IsUnitPausedBJ( GetEnumUnit() ) === true ) ) ) {

		return true;

	}


	if ( ( ( IsUnitType( GetEnumUnit(), UNIT_TYPE_STRUCTURE ) === true ) ) ) {

		return true;

	}


	if ( ( ( GetEnumUnit() === udg_DamageSource[ udg_LoopIndex ] ) ) ) {

		return true;

	}

	return false;

};


const Trig_Drag_Func002Func001C = (): boolean => {


	if ( ( ! Trig_Drag_Func002Func001Func002C() ) ) {

		return false;

	}

	return true;

};


const Trig_Drag_Func002A = (): void => {


	if ( ( Trig_Drag_Func002Func001C() ) ) {

		GroupRemoveUnitSimple( GetEnumUnit(), udg_TempGroup )

	} else {

	null

	}


};


const Trig_Drag_Actions = (): void => {

	udg_TempGroup = GetUnitsInRangeOfLocMatching( udg_CollisionRadius[ udg_LoopIndex ], udg_TempPoint2, Condition( Trig_Drag_Func001002003 ) );
	ForGroupBJ( udg_TempGroup, Trig_Drag_Func002A )
	SetUnitX( GroupPickRandomUnit( udg_TempGroup ), GetLocationX( udg_TempPoint2 ) )
	SetUnitY( GroupPickRandomUnit( udg_TempGroup ), GetLocationY( udg_TempPoint2 ) )
	DestroyGroup( udg_TempGroup )

};


//===========================================================================
const InitTrig_Drag = (): void => {

	gg_trg_Drag = CreateTrigger();
	TriggerAddAction( gg_trg_Drag, Trig_Drag_Actions )

};

addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Drag();
} );
